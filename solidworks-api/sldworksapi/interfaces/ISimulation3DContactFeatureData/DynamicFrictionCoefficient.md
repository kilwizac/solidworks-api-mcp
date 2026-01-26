---
type: property
interface: ISimulation3DContactFeatureData
member: DynamicFrictionCoefficient
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulation3DContactFeatureData.DynamicFrictionVelocity
keywords:
  - friction
  - dynamicfrictioncoefficient
  - isimulation3dcontactfeaturedata
  - simulation3
  - contact
  - feature
  - data
  - dynamic
  - coefficient
  - double
readonly: null
---

# ISimulation3DContactFeatureData.DynamicFrictionCoefficient

Gets or sets the dynamic friction coefficient in a 3D Contact feature.

## Signature

```csharp
System.Double DynamicFrictionCoefficient {get; set;}
```
## Parameters

None.

## Return Value

Dynamic friction coefficient

## Remarks

Available only when
ISimulation3DContactFeatureData::FrictionOption
is
swMotionContactFrictionType_e
.swMotionContactFrictionDynamic.

## Examples

- ISimulation3DContactFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimulation3DContactFeatureData)

## See Also

- `ISimulation3DContactFeatureData.DynamicFrictionVelocity`