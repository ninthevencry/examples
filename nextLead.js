// add in functionality that deals with agent coming online halfway through the day.
// add in cut off from the end of the day when sales agents are not available. ensuring that one agent does not get overloaded.
// allow for high priorty leads to go to agents with X % of lead distribution.

const noLeadsInPool = 10000;
const noAgents = 7;
const agentDist = {
    _agents: [
      {name: 'AgentX', dist: 100, setDist: 100, leads: 1, start: new Date('2024-03-11 10:00:00'), end:  new Date('2024-03-10 16:00:00'), factor: 0},
      {name: 'AgentB', dist: 50, setDist: 50, leads: 1, start:  new Date('2024-03-11 08:00:00'), end:  new Date('2024-03-11 16:00:00'), factor: 0},
      {name: 'AgentD', dist: 25, setDist: 25, leads: 1, start:  new Date('2024-03-11 10:00:00'), end:  new Date('2024-03-11 21:00:00'), factor: 0},
      {name: 'AgentA', dist: 70, setDist: 70, leads: 1, start:  new Date('2024-03-11 08:00:00'), end:  new Date('2024-03-11 16:00:00'), factor: 0},
      {name: 'AgentZ', dist: 100, setDist: 100, leads: 1, start:  new Date('2024-03-11 12:00:00'), end:  new Date('2024-03-11 17:00:00'), factor: 0},
      {name: 'AgentC', dist: 25, setDist: 25, leads: 1, start:  new Date('2024-03-11 09:00:00'), end:  new Date('2024-03-11 17:00:00'), factor: 0},
      {name: 'AgentY', dist: 100, setDist: 100, leads: 1, start:  new Date('2024-03-11 11:00:00'), end:  new Date('2024-03-11 21:00:00'), factor: 0}
    ],
    get agents() {
      return this._agents;
    },
    addAgent(name, dist, leads, start, end, factor) {
      let agent = {
        name: name,
        dist: dist,
        leads: leads,
        start: start,
        end: end,
        factor: factor
      }
      this._agents.push(agent);
    }
}
/*
//though I needed this but I don't as it's handled by the if statement in the findAgentWithNoLeads function
const findAgentWithNoLeads = (agentArray) => {
    //sort agents in order of distribution
    agentArray.sort((a, b) => b.dist - a.dist);
    return agentArray.find(agent => agent.leads === 0);
}
*/

const findAgentByFactor = (agentArray) => {
    //remove agents from array with an end hour within 30 minutes of current time
    let nowHour = new Date(currentHour.getTime() + oneHour);
    agentArray = agentArray.filter(agent => agent.end.getHours() > nowHour.getHours());

    agentArray.forEach(agent => {
        let aDist = 0;
        agent.dist = agent.setDist;
        //set a weighting based on start time
        if (nowHour < agent.start) {
            //time difference between now and start of shift in hours
            let timeDiff = (agent.start - nowHour) / 1000 / 60 / 60;
            let perDiff = timeDiff / agent.start.getHours();
            aDist = agent.setDist * perDiff;
        } 
        else if (nowHour < agent.end) {
    
        }
        agent.dist -= aDist;
    });

    agentArray = agentArray.filter(agent => agent.dist > 0);
    
    //if there are agents with no leads in the pool then sort by distribution factor.
    //once all agents have a lead then sort by factor
    if (agentArray.some(val => val.factor === 0)) {
        //sort agents in order of distribution
        agentArray.sort((a, b) => b.dist - a.dist);
    } else {
        //sort agents in order of factor
        agentArray.sort((a, b) => b.factor - a.factor);
    }
    //return the first agent in the list
    return agentArray[0];
}

//as leads are assigned to agents we need to update the factor for each agent
const setAgentFactors = (agentArray,totalDist,totalLeads) => {

    agentArray.forEach(agent => {
        agent.factor = ((totalDist / totalLeads) * (agent.dist) / agent.leads);
    });
}

//add up the distribution % for each agent to find total distribution percentage which is then used in factor calc
let totalDistPer = agentDist.agents.reduce(
    (partialNum, agent) => partialNum + agent.dist, 0
);

//function to check rota for each agent and reduce distribution based on hours online
//based on shift pattern of X hours reduce the distribution by X % to allow for shifts which are less than X hours
const checkRota = (agentArray) => {
    agentArray.forEach(agent => {
        //calculate hours online based on start and end of shift
        let hoursOnline = agent.end.getHours()   - agent.start.getHours();
        let shiftHours = 8; //this is the amount of hours in a standard shift pattern
        //reduce distribution percentage based on hours online
        if (hoursOnline < shiftHours) {
            agent.dist = agent.dist * (hoursOnline / shiftHours);
            agent.setDist = agent.dist;
        }
    })
}

//call function to check rota to adjust distribution based on shift pattern
checkRota(agentDist.agents);
let unassignedLeads = 0;

const assignLeads = (numberOfLeads) => {

    for (i = 1; i <= numberOfLeads; i++) {
        //get total leads currently assigned
        let totalAssignedLeads = agentDist.agents.reduce(
            (partialNum, agent) => partialNum + agent.leads, 0
        );
        //get the top agent and assign the lead
        anAgent = findAgentByFactor(agentDist.agents);
        //if not agent return then add to unassigned leads
        if (!anAgent) {
            unassignedLeads += numberOfLeads;
            setAgentFactors(agentDist.agents,totalDistPer,totalAssignedLeads)
            break;
        } else {
            anAgent.leads += 1;
        }
        //now update the factors for each agent
        //totalAssignedLeads //totalDistPer
        setAgentFactors(agentDist.agents,totalDistPer,totalAssignedLeads)
    }
}

const showCurrentLeadsAssigned = () => {

    console.log(`Leads recieved: ${totalLeads} Unassigned leads: ${unassignedLeads}`);

    agentDist.agents.sort((a, b) => b.dist - a.dist);
    agentDist.agents.forEach(agent => {
        console.log(agent.name + " " + agent.leads + " " + agent.factor + " " + agent.factor);
    });

}

//loop to minic a weeks progress in days, hours and minutes
const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
const oneHour = 60 * 60 * 1000; // minutes * seconds * milliseconds

const now = new Date("2024-03-10 23:00:00");
let currentDay = new Date(now.getTime());
let currentHour = new Date(now.getTime());

let overnightLeads = 100; //This is to start the test simulation with 100 leads in the pool from previous day
let totalLeads = 0;

//168 is 7 days
for (let j = 0; j < 24; j++) { // 7 days
    if (j % 24 === 0) {
        currentDay = new Date(currentDay.getTime() + oneDay);
        console.log(`Day ${currentDay.toLocaleDateString()}`);
    }
    
    let leads = j === 0 ? overnightLeads : Math.floor(Math.random() * 45) + 5;
    assignLeads(leads);
    currentHour = new Date(currentHour.getTime() + oneHour);
    console.log(`\tHour ${currentHour.toLocaleTimeString()} Leads: ${leads}`);

    showCurrentLeadsAssigned();
    totalLeads += leads;
}

