---
type: property
interface: ISimulation3DContactFeatureData
member: Exponent
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
  - exponent
  - isimulation3dcontactfeaturedata
  - simulation3
  - contact
  - feature
  - data
  - double
readonly: null
---

# ISimulation3DContactFeatureData.Exponent

Gets or sets the exponent used to calculate the exponential force in a 3D Contact feature.

## Signature

```csharp
System.Double Exponent {get; set;}
```
## Parameters

None.

## Return Value

Exponent

## Remarks

Available only when
ISimulation3DContactFeatureData::UseRestitutionCoefficient
and
ISimulation3DContactFeatureData::SpecifyMaterial
are both false.

## Examples

- ISimulation3DContactFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimulation3DContactFeatureData)