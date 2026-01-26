---
type: method
interface: IInterferenceDetectionMgr
member: GetComponentsTransformInterferenceCount
returns: System.Int32
parameters:
  -
    name: NumOfComponent
    type: System.Int32
    description: Number of components in the Component array
  -
    name: Component
    type: Component2
    description: Array of IComponent2 s
  -
    name: Transform
    type: MathTransform
    description: IMathTransform
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - components
  - see
  - also
  - icomponent2
  - interfering
  - getcomponentstransforminterferencecount
  - iinterferencedetectionmgr
  - interference
  - detection
  - mgr
  - transform
  - count
  - num
  - component
  - int32
  - component2
  - math
---

# IInterferenceDetectionMgr.GetComponentsTransformInterferenceCount

Calculates and gets the number of interfering components for the specified components and math transform.

## Signature

```csharp
System.Int32 GetComponentsTransformInterferenceCount( 
   System.Int32
NumOfComponent
,
   ref Component2
Component
,
   ref MathTransform
Transform
)
```
## Parameters

- `NumOfComponent` (System.Int32): Number of components in the Component array
- `Component` (Component2): Array of IComponent2 s
- `Transform` (MathTransform): IMathTransform

## Return Value

Number of interfering components

## Remarks

Call this method before calling
IInterferenceDetectionMgr::IGetComponentsTransformInterference
to get the size of the array returned by that method.