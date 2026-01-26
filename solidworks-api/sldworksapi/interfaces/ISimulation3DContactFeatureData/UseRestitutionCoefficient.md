---
type: property
interface: ISimulation3DContactFeatureData
member: UseRestitutionCoefficient
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulation3DContactFeatureData.Exponent
  - ISimulation3DContactFeatureData.MaxDamping
  - ISimulation3DContactFeatureData.Penetration
  - ISimulation3DContactFeatureData.RestitutionCoefficient
  - ISimulation3DContactFeatureData.Stiffness
keywords:
  - userestitutioncoefficient
  - isimulation3dcontactfeaturedata
  - simulation3
  - contact
  - feature
  - data
  - use
  - restitution
  - coefficient
  - boolean
readonly: null
---

# ISimulation3DContactFeatureData.UseRestitutionCoefficient

Gets or sets whether to use the restitution coefficient instead of impact force in a 3D Contact feature.

## Signature

```csharp
System.Boolean UseRestitutionCoefficient {get; set;}
```
## Parameters

None.

## Return Value

True to use the restitution coefficient, false to use impact force

## Examples

- ISimulation3DContactFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimulation3DContactFeatureData)

## See Also

- `ISimulation3DContactFeatureData.Exponent`
- `ISimulation3DContactFeatureData.MaxDamping`
- `ISimulation3DContactFeatureData.Penetration`
- `ISimulation3DContactFeatureData.RestitutionCoefficient`
- `ISimulation3DContactFeatureData.Stiffness`