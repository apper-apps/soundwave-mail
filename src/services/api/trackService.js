import tracksData from '@/services/mockData/tracks.json';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let tracks = [...tracksData];

export const trackService = {
  getAll: async () => {
    await delay(300);
    return [...tracks];
  },

  getById: async (id) => {
    await delay(200);
    const track = tracks.find(t => t.Id === parseInt(id));
    if (!track) {
      throw new Error(`Track with ID ${id} not found`);
    }
    return { ...track };
  },

  create: async (trackData) => {
    await delay(400);
    const newTrack = {
      ...trackData,
      Id: Math.max(...tracks.map(t => t.Id), 0) + 1,
      waveformData: trackData.waveformData || Array.from({ length: 50 }, () => Math.random())
    };
    tracks.push(newTrack);
    return { ...newTrack };
  },

  update: async (id, trackData) => {
    await delay(300);
    const index = tracks.findIndex(t => t.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Track with ID ${id} not found`);
    }
    tracks[index] = { ...tracks[index], ...trackData };
    return { ...tracks[index] };
  },

  delete: async (id) => {
    await delay(200);
    const index = tracks.findIndex(t => t.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Track with ID ${id} not found`);
    }
    tracks.splice(index, 1);
    return { success: true };
  }
};