// add in functionality that deals with agent coming online halfway through the day.
// add in cut off from the end of the day when sales agents are not available. ensuring that one agent does not get overloaded.
// allow for high priorty leads to go to agents with X % of lead distribution.

const noLeadsInPool = 10000;
const noAgents = 7;
const agentDist = {
    _agents: [
      {name: 'AgentX', dist: 100, leads: 0, start: 10, end: 16, factor: 0},
      {name: 'AgentB', dist: 50, leads: 0, start: 8, end: 16, factor: 0},
      {name: 'AgentD', dist: 25, leads: 0, start: 10, end: 21, factor: 0},
      {name: 'AgentA', dist: 70, leads: 0, start: 8, end: 16, factor: 0},
      {name: 'AgentZ', dist: 100, leads: 0, start: 9, end: 17, factor: 0},
      {name: 'AgentC', dist: 25, leads: 0, start: 9, end: 17, factor: 0},
      {name: 'AgentY', dist: 100, leads: 0, start: 11, end: 21, factor: 0}
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
        agent.factor = (totalDist / totalLeads) * agent.dist / agent.leads;
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
        let hoursOnline = agent.end - agent.start;
        let shiftHours = 8; //this is the amount of hours in a standard shift pattern
        //reduce distribution percentage based on hours online
        if (hoursOnline < shiftHours) {
            agent.dist = agent.dist * (hoursOnline / shiftHours);
        }
    })
}

//call function to check rota to adjust distribution based on shift pattern
checkRota(agentDist.agents);

//assign leads
let totalAssignedLeads = 0;
for (i = 0; i <= 1000; i++) {

    /*
    replicate adding a new agent into the array mid lead distribution
    it will be up to the admin to ensure Rota time is correct otherwise agent will 
    recieve too many leads for the time they are online
    */
    if (i === 500) {
        agentDist.addAgent('AgentW', 100, 0, 12, 16, 0);
        totalDistPer += 100; 
        checkRota(agentDist.agents);
    }

    //get total leads currently assigned
    totalAssignedLeads = agentDist.agents.reduce(
        (partialNum, agent) => partialNum + agent.leads, 0
    );
    //get the top agent and assign the lead
    anAgent = findAgentByFactor(agentDist.agents);
    anAgent.leads += 1;
    //now update the factors for each agent
    //totalAssignedLeads //totalDistPer
    setAgentFactors(agentDist.agents,totalDistPer,totalAssignedLeads)
}
//console.log(totalAssignedLeads);
agentDist.agents.sort((a, b) => b.dist - a.dist);
agentDist.agents.forEach(agent => {
    console.log(agent.name + " " + agent.leads + " " + agent.factor);
});




