---
type: property
interface: ISimulation3DContactFeatureData
member: MaterialID
returns: System.Int32
parameters:
  -
    name: WhichOne
    type: System.Int32
    description: 0-based index of the contact component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related: []
keywords:
  - materialid
  - isimulation3dcontactfeaturedata
  - simulation3
  - contact
  - feature
  - data
  - material
  - id
  - which
  - one
  - int32
readonly: null
---

# ISimulation3DContactFeatureData.MaterialID

Gets or sets the type of material the specified component in this 3D Contact feature.

## Signature

```csharp
System.Int32 MaterialID( 
   System.Int32
WhichOne
) {get; set;}
```
## Parameters

- `WhichOne` (System.Int32): 0-based index of the contact component

## Return Value

Material as defined by swCosmosWorksMat

## Remarks

Available only when
ISimulation3DContactFeatureData::SpecifyMaterial
is true.

## Examples

- ISimulation3DContactFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimulation3DContactFeatureData)