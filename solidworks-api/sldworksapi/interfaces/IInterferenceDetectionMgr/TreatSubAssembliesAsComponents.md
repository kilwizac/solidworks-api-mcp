---
type: property
interface: IInterferenceDetectionMgr
member: TreatSubAssembliesAsComponents
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IInterference.Components
  - IInterference.GetComponentCount
  - IInterference.IGetComponents
  - IInterferenceDetectionMgr.GetInterferenceComponentCount
  - IInterferenceDetectionMgr.GetInterferenceComponents
  - IInterferenceDetectionMgr.IGetInterferenceComponents
  - IInterferenceDetectionMgr.MakeInterferingPartsTransparent
  - IInterferenceDetectionMgr.NonInterferingComponentDisplay
keywords:
  - components
  - see
  - also
  - icomponent2
  - interfering
  - treatsubassembliesascomponents
  - iinterferencedetectionmgr
  - interference
  - detection
  - mgr
  - treat
  - sub
  - assemblies
  - boolean
  - run
  - vb
  - net
  - vba
readonly: null
---

# IInterferenceDetectionMgr.TreatSubAssembliesAsComponents

Gets or sets whether to treat subassemblies as single components so that interferences between a sub-assembly's components are not reported.

## Signature

```csharp
System.Boolean TreatSubAssembliesAsComponents {get; set;}
```
## Parameters

None.

## Return Value

True to treat a sub-assembly's components as single, false to not

## Remarks

Currently, the value set for this property:
exists only while the InterferenceDetectionMgr object is in scope; i.e., setting this property is temporary.
does not persist across SOLIDWORKS Design sessions.
does not persist into the next invocation of interference detection in the user interface.

## Examples

- Run Interference Detection (C#) (Run_Interference_Detection_Example_CSharp.htm)
- Run Interference Detection (VB.NET) (Run_Interference_Detection_Example_VBNET.htm)
- Run Interference Detection (VBA) (Run_Interference_Detection_Example_VB.htm)

## See Also

- `IInterference.Components`
- `IInterference.GetComponentCount`
- `IInterference.IGetComponents`
- `IInterferenceDetectionMgr.GetInterferenceComponentCount`
- `IInterferenceDetectionMgr.GetInterferenceComponents`
- `IInterferenceDetectionMgr.IGetInterferenceComponents`
- `IInterferenceDetectionMgr.MakeInterferingPartsTransparent`
- `IInterferenceDetectionMgr.NonInterferingComponentDisplay`