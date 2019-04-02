declare var data: any;

export const environment = {
  production: true,

  GetAllGameStatistics: data.basePath + 'api/GameController/GetAll/',
  InsertGameStatistics: data.basePath + 'api/GameController/InsertGameStatistics/'
};
