---
type: property
interface: ISimulation3DContactFeatureData
member: StaticFrictionCoefficient
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulation3DContactFeatureData.StaticFrictionVelocity
keywords:
  - staticfrictioncoefficient
  - isimulation3dcontactfeaturedata
  - simulation3
  - contact
  - feature
  - data
  - static
  - friction
  - coefficient
  - double
readonly: null
---

# ISimulation3DContactFeatureData.StaticFrictionCoefficient

Gets or sets the static friction coefficent in a 3D Contact feature.

## Signature

```csharp
System.Double StaticFrictionCoefficient {get; set;}
```
## Parameters

None.

## Return Value

Static friction coefficient

## Remarks

Available only when
ISimulation3DContactFeatureData::FrictionOption
is
swMotionContactFrictionType_e
.swMotionContactFrictionFull.

## Examples

- ISimulation3DContactFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimulation3DContactFeatureData)

## See Also

- `ISimulation3DContactFeatureData.StaticFrictionVelocity`