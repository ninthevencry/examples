const noLeadsInPool = 10000;
const noAgents = 7;
const agentDist = {
    _agents: [
      {name: 'AgentX', dist: 100, leads: 0, start: 8, end: 4, factor: 0},
      {name: 'AgentB', dist: 50, leads: 0, start: 8, end: 4, factor: 0},
      {name: 'AgentD', dist: 25, leads: 0, start: 10, end: 9, factor: 0},
      {name: 'AgentA', dist: 70, leads: 0, start: 8, end: 4, factor: 0},
      {name: 'AgentZ', dist: 100, leads: 0, start: 9, end: 5, factor: 0},
      {name: 'AgentC', dist: 25, leads: 0, start: 9, end: 5, factor: 0},
      {name: 'AgentY', dist: 100, leads: 0, start: 10, end: 9, factor: 0}
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

const findAgentWithNoLeads = (agentArray) => {
    //sort agents in order of distribution
    agentArray.sort((a, b) => b.dist - a.dist);
    return agentArray.find(agent => agent.leads === 0);
}

const findAgentByFactor = (agentArray) => {
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

const setAgentFactors = (agentArray,totalDist,totalLeads) => {
    agentArray.forEach(agent => {
        agent.factor = (totalDist / totalLeads) * agent.dist / agent.leads;
    });
}

const totalDistPer = agentDist.agents.reduce(
    (partialNum, agent) => partialNum + agent.dist, 0
);
let totalAssignedLeads = 0;
for (i = 0; i <= 1000; i++) {
    let anAgent = findAgentWithNoLeads(agentDist.agents);
    if (anAgent !== undefined) {
        //console.log(anAgent.name);
        anAgent.leads += 1;
    } else {
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
}
//console.log(totalAssignedLeads);
agentDist.agents.sort((a, b) => b.dist - a.dist);
agentDist.agents.forEach(agent => {
    console.log(agent.name + " " + agent.leads + " " + agent.factor);
});




