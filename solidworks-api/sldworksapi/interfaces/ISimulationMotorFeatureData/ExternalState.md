---
type: property
interface: ISimulationMotorFeatureData
member: ExternalState
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related: []
keywords:
  - externalstate
  - isimulationmotorfeaturedata
  - simulation
  - motor
  - feature
  - data
  - external
  - state
  - boolean
  - fire
  - events
  - output
  - time
  - step
  - changes
  - vb
  - net
  - vba
readonly: null
---

# ISimulationMotorFeatureData.ExternalState

Gets or sets whether your application can listen to motor-related motion study event.

## Signature

```csharp
System.Boolean ExternalState {get; set;}
```
## Parameters

None.

## Return Value

True to listen to IMotionStudy MotorTimeStepChangeNotify and MotorOutputTimeStepChangeNotify , false to not

## Remarks

When a motor's state is set to external, IMotionStudy MotorTimeStepChangeNotify and MotorOutputTimeStepChangeNotify events are called with the motor name, time, and a pointer for the return value. These events are called at every major step from ADAMS. You can implement any motion law after catching these events. The return value for each event is a double that specifies the new motor speed.

## Examples

- Fire Events for External Output Time Step Changes (C#) (Fire_Events_for_External_Output_Time_Step_Changes_Example_CSharp.htm)
- Fire Events for External Output Time Step Changes (VB.NET) (Fire_Events_for_External_Output_Time_Step_Changes_Example_VBNET.htm)
- Fire Events for External Output Time Step Changes (VBA) (Fire_Events_for_External_Output_Time_Step_Changes_Example_VB.htm)