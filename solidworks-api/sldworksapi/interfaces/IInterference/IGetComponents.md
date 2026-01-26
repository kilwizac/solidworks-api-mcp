---
type: method
interface: IInterference
member: IGetComponents
returns: Component2
parameters:
  -
    name: ComponentCount
    type: System.Int32
    description: Number of components interfering with each other
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IInterference.Components
  - IInterferenceDetectionMgr.GetInterferenceComponentCount
  - IInterferenceDetectionMgr.GetInterferenceComponents
  - IInterferenceDetectionMgr.IGetInterferenceComponents
  - IInterferenceDetectionMgr.MakeInterferingPartsTransparent
  - IInterferenceDetectionMgr.NonInterferingComponentDisplay
  - IInterferenceDetectionMgr.TreatSubAssembliesAsComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - interfering
  - igetcomponents
  - iinterference
  - interference
  - component
  - count
  - int32
  - component2
---

# IInterference.IGetComponents

Gets the components that interfere with each other.

## Signature

```csharp
Component2 IGetComponents( 
   System.Int32
ComponentCount
)
```
## Parameters

- `ComponentCount` (System.Int32): Number of components interfering with each other

## Return Value

in-process, unmanaged C++: Pointer to an array of components interfering with each other VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IInterference::GetComponentCount
before calling this method to determine the size of the array.

## See Also

- `IInterference.Components`
- `IInterferenceDetectionMgr.GetInterferenceComponentCount`
- `IInterferenceDetectionMgr.GetInterferenceComponents`
- `IInterferenceDetectionMgr.IGetInterferenceComponents`
- `IInterferenceDetectionMgr.MakeInterferingPartsTransparent`
- `IInterferenceDetectionMgr.NonInterferingComponentDisplay`
- `IInterferenceDetectionMgr.TreatSubAssembliesAsComponents`