---
type: property
interface: ISimulation3DContactFeatureData
member: RestitutionCoefficient
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related: []
keywords:
  - restitutioncoefficient
  - isimulation3dcontactfeaturedata
  - simulation3
  - contact
  - feature
  - data
  - restitution
  - coefficient
  - double
readonly: null
---

# ISimulation3DContactFeatureData.RestitutionCoefficient

Gets or sets the coefficient of restitution in a 3D Contact feature.

## Signature

```csharp
System.Double RestitutionCoefficient {get; set;}
```
## Parameters

None.

## Return Value

Coefficient of restitution

## Remarks

Available only when
ISimulation3DContactFeatureData::UseRestitutionCoefficient
is true.
The restitution coefficient is the ratio of relative velocities of two elastic spheres before and after impact.

## Examples

- ISimulation3DContactFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimulation3DContactFeatureData)