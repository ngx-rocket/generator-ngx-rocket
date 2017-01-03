export enum LogLevel {
  Off = 0,
  Error,
  Warning,
  Info,
  Debug
}

export interface LogOutput {
  (source: string, level: LogLevel, ...objects: any[]): void;
}

export class Logger {

  static level = LogLevel.Debug;

  private static outputs: Array<LogOutput> = [];

  static addOutput(output: LogOutput) {
    Logger.outputs.push(output);
  }

  constructor(private source?: string) { }

  debug(...objects: any[]) {
    this.log(console.log, LogLevel.Debug, objects);
  }

  info(...objects: any[]) {
    this.log(console.info, LogLevel.Info, objects);
  }

  warn(...objects: any[]) {
    this.log(console.warn, LogLevel.Warning, objects);
  }

  error(...objects: any[]) {
    this.log(console.error, LogLevel.Error, objects);
  }

  private log(func: Function, level: LogLevel, objects: any[]) {
    if (level <= Logger.level) {
      let log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
      func.apply(func, log);

      Logger.outputs.forEach((output: Function) => {
        output.apply(output, [this.source, level].concat(objects));
      });
    }
  }

}
