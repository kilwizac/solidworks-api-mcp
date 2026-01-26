---
type: method
interface: IInterferenceDetectionMgr
member: IGetInterferenceComponents
returns: Component2
parameters:
  -
    name: InterfernceComponentCount
    type: System.Int32
    description: Number of interfering components
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IInterference.Components
  - IInterference.GetComponentCount
  - IInterference.IGetComponents
  - IInterferenceDetectionMgr.GetInterferenceComponents
  - IInterferenceDetectionMgr.IGetComponentsTransformInterference
  - IInterferenceDetectionMgr.MakeInterferingPartsTransparent
  - IInterferenceDetectionMgr.NonInterferingComponentDisplay
  - IInterferenceDetectionMgr.TreatSubAssembliesAsComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - interfering
  - igetinterferencecomponents
  - iinterferencedetectionmgr
  - interference
  - detection
  - mgr
  - interfernce
  - component
  - count
  - int32
  - component2
---

# IInterferenceDetectionMgr.IGetInterferenceComponents

Calculates and gets the interfering components.

## Signature

```csharp
Component2 IGetInterferenceComponents( 
   System.Int32
InterfernceComponentCount
)
```
## Parameters

- `InterfernceComponentCount` (System.Int32): Number of interfering components

## Return Value

in-process, unmanaged C++: Pointer to an array of interfering components VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IInteferenceDetectionMgr::GetInterferenceComponentCount
to get the size for the array of interfering components.

## See Also

- `IInterference.Components`
- `IInterference.GetComponentCount`
- `IInterference.IGetComponents`
- `IInterferenceDetectionMgr.GetInterferenceComponents`
- `IInterferenceDetectionMgr.IGetComponentsTransformInterference`
- `IInterferenceDetectionMgr.MakeInterferingPartsTransparent`
- `IInterferenceDetectionMgr.NonInterferingComponentDisplay`
- `IInterferenceDetectionMgr.TreatSubAssembliesAsComponents`