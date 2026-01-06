import { ApiResponse } from '@org/types';

export class ResponseFormatter {
  static success(data: any, message: string = 'Operation successful'): ApiResponse {
    return {
      success: true,
      data,
      message
    };
  }

  static error(message: string, error?: string): ApiResponse {
    return {
      success: false,
      message,
      error
    };
  }
}

export class Logger {
  static info(service: string, message: string, ...args: any[]) {
    console.log(`[${service}] [INFO] ${message}`, ...args);
  }

  static error(service: string, message: string, error?: any) {
    console.error(`[${service}] [ERROR] ${message}`, error);
  }

  static warn(service: string, message: string, ...args: any[]) {
    console.warn(`[${service}] [WARN] ${message}`, ...args);
  }
}