---
type: property
interface: ISimulation3DContactFeatureData
member: FrictionOption
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulation3DContactFeatureData.DynamicFrictionCoefficient
  - ISimulation3DContactFeatureData.DynamicFrictionVelocity
  - ISimulation3DContactFeatureData.StaticFrictionCoefficient
  - ISimulation3DContactFeatureData.StaticFrictionVelocity
keywords:
  - frictionoption
  - isimulation3dcontactfeaturedata
  - simulation3
  - contact
  - feature
  - data
  - friction
  - option
  - int32
readonly: null
---

# ISimulation3DContactFeatureData.FrictionOption

Gets or sets whether contact friction is off, full (static), or dynamic in a 3D Contact feature.

## Signature

```csharp
System.Int32 FrictionOption {get; set;}
```
## Parameters

None.

## Return Value

Friction as defined in swMotionContactFrictionType_e

## Examples

- ISimulation3DContactFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimulation3DContactFeatureData)

## See Also

- `ISimulation3DContactFeatureData.DynamicFrictionCoefficient`
- `ISimulation3DContactFeatureData.DynamicFrictionVelocity`
- `ISimulation3DContactFeatureData.StaticFrictionCoefficient`
- `ISimulation3DContactFeatureData.StaticFrictionVelocity`