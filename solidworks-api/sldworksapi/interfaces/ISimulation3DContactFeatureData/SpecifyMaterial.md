---
type: property
interface: ISimulation3DContactFeatureData
member: SpecifyMaterial
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulation3DContactFeatureData.MaterialID
keywords:
  - specifymaterial
  - isimulation3dcontactfeaturedata
  - simulation3
  - contact
  - feature
  - data
  - specify
  - material
  - boolean
readonly: null
---

# ISimulation3DContactFeatureData.SpecifyMaterial

Gets or sets whether to use materials in a 3D Contact feature.

## Signature

```csharp
System.Boolean SpecifyMaterial {get; set;}
```
## Parameters

None.

## Return Value

True to use materials, false to not

## Remarks

Set to false to modify elastic properties:
ISimulation3DContactFeatureData::Stiffness
ISimulation3DContactFeatureData::Exponent
ISimulation3DContactFeatureData::MaxDamping
ISimulation3DContactFeatureData::Penetration

## Examples

- ISimulation3DContactFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimulation3DContactFeatureData)

## See Also

- `ISimulation3DContactFeatureData.MaterialID`