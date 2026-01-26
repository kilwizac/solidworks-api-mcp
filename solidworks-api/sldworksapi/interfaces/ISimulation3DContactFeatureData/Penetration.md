---
type: property
interface: ISimulation3DContactFeatureData
member: Penetration
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
  - penetration
  - isimulation3dcontactfeaturedata
  - simulation3
  - contact
  - feature
  - data
  - double
readonly: null
---

# ISimulation3DContactFeatureData.Penetration

Gets or sets the interaction boundary penetration at which the maximum damping value is applied when calculating the impact force in a 3D Contact feature.

## Signature

```csharp
System.Double Penetration {get; set;}
```
## Parameters

None.

## Return Value

Penetration in mechanism's length unit

## Remarks

Available only when
ISimulation3DContactFeatureData::UseRestitutionCoefficient
and
ISimulation3DContactFeatureData::SpecifyMaterial
are both false.

## Examples

- ISimulation3DContactFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimulation3DContactFeatureData)