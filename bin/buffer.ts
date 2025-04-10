#!/usr/bin/env node
import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { BufferStack } from "../lib/buffer-stack.js";

const app = new App();
new BufferStack(app, "BufferStack", {});