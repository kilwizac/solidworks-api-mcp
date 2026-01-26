---
type: property
interface: ISimulation3DContactFeatureData
member: Stiffness
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
  - stiffness
  - isimulation3dcontactfeaturedata
  - simulation3
  - contact
  - feature
  - data
  - double
readonly: null
---

# ISimulation3DContactFeatureData.Stiffness

Gets or sets the stiffness at the boundary of interaction between the two parts in a 3D Contact feature.

## Signature

```csharp
System.Double Stiffness {get; set;}
```
## Parameters

None.

## Return Value

Stiffness at the boundary of interaction

## Remarks

Available only when
ISimulation3DContactFeatureData::UseRestitutionCoefficient
and
ISimulation3DContactFeatureData::SpecifyMaterial
are both false.

## Examples

- ISimulation3DContactFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimulation3DContactFeatureData)