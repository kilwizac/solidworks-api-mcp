---
type: property
interface: ISimulation3DContactFeatureData
member: StaticFrictionVelocity
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulation3DContactFeatureData.StaticFrictionCoefficient
keywords:
  - staticfrictionvelocity
  - isimulation3dcontactfeaturedata
  - simulation3
  - contact
  - feature
  - data
  - static
  - friction
  - velocity
  - double
readonly: null
---

# ISimulation3DContactFeatureData.StaticFrictionVelocity

Gets or sets the static friction velocity in a 3D Contact feature.

## Signature

```csharp
System.Double StaticFrictionVelocity {get; set;}
```
## Parameters

None.

## Return Value

Static friction velocity

## Remarks

Available only when
ISimulation3DContactFeatureData::FrictionOption
is
swMotionContactFrictionType_e
.swMotionContactFrictionFull.

## Examples

- ISimulation3DContactFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimulation3DContactFeatureData)

## See Also

- `ISimulation3DContactFeatureData.StaticFrictionCoefficient`