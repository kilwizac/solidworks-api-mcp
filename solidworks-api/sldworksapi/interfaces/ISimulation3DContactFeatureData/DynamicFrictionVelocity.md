---
type: property
interface: ISimulation3DContactFeatureData
member: DynamicFrictionVelocity
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulation3DContactFeatureData.DynamicFrictionCoefficient
keywords:
  - friction
  - dynamicfrictionvelocity
  - isimulation3dcontactfeaturedata
  - simulation3
  - contact
  - feature
  - data
  - dynamic
  - velocity
  - double
readonly: null
---

# ISimulation3DContactFeatureData.DynamicFrictionVelocity

Gets or sets the dynamic friction velocity in a 3D Contact feature.

## Signature

```csharp
System.Double DynamicFrictionVelocity {get; set;}
```
## Parameters

None.

## Return Value

Dynamic friction velocity

## Remarks

Available only when
ISimulation3DContactFeatureData::FrictionOption
is
swMotionContactFrictionType_e
.swMotionContactFrictionDynamic.

## Examples

- ISimulation3DContactFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimulation3DContactFeatureData)

## See Also

- `ISimulation3DContactFeatureData.DynamicFrictionCoefficient`