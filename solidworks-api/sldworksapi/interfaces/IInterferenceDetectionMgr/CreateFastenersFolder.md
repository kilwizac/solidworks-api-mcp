---
type: property
interface: IInterferenceDetectionMgr
member: CreateFastenersFolder
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IInterference.IsFastener
keywords:
  - fasteners
  - createfastenersfolder
  - iinterferencedetectionmgr
  - interference
  - detection
  - mgr
  - create
  - folder
  - boolean
  - run
  - vb
  - net
  - vba
readonly: null
---

# IInterferenceDetectionMgr.CreateFastenersFolder

Gets or sets whether to create the Fasteners folders to segregate interferences involving fasteners.

## Signature

```csharp
System.Boolean CreateFastenersFolder {get; set;}
```
## Parameters

None.

## Return Value

True to create fasteners folder, false to not

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

- `IInterference.IsFastener`