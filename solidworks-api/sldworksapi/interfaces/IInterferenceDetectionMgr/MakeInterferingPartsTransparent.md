---
type: property
interface: IInterferenceDetectionMgr
member: MakeInterferingPartsTransparent
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - parts
related:
  - IInterference.Components
  - IInterference.GetComponentCount
  - IInterference.IGetComponents
  - IInterferenceDetectionMgr.GetInterferenceComponentCount
  - IInterferenceDetectionMgr.GetInterferenceComponents
  - IInterferenceDetectionMgr.IGetInterferenceComponents
  - IInterferenceDetectionMgr.NonInterferingComponentDisplay
  - IInterferenceDetectionMgr.TreatSubAssembliesAsComponents
keywords:
  - transparency
  - components
  - see
  - also
  - icomponent2
  - interfering
  - makeinterferingpartstransparent
  - iinterferencedetectionmgr
  - interference
  - detection
  - mgr
  - make
  - parts
  - transparent
  - boolean
  - run
  - vb
  - net
  - vba
readonly: null
---

# IInterferenceDetectionMgr.MakeInterferingPartsTransparent

Gets or sets whether to display the components of the selected interference in transparent mode.

## Signature

```csharp
System.Boolean MakeInterferingPartsTransparent {get; set;}
```
## Parameters

None.

## Return Value

True to make interfering parts transparent, false to not

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
- `IInterferenceDetectionMgr.NonInterferingComponentDisplay`
- `IInterferenceDetectionMgr.TreatSubAssembliesAsComponents`