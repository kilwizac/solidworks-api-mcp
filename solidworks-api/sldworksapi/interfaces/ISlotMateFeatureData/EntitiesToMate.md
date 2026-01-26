---
type: property
interface: ISlotMateFeatureData
member: EntitiesToMate
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - entitiestomate
  - islotmatefeaturedata
  - slot
  - mate
  - feature
  - data
  - entities
  - object
readonly: null
---

# ISlotMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this slot mate feature.

## Signature

```csharp
System.Object EntitiesToMate {get; set;}
```
## Parameters

None.

## Return Value

Array of two entities to mate (see Remarks )

## Remarks

Select the
face
of a straight or arced slot and another entity:
Face of another straight or arced slot
Axis
Cylindrical face
Instead of specifying this property, you can use
IModelDocExtension::SelectByID2
to pre-select the entities to mate using Mark = 1. You can pre-select mate entities during mate creation, but not during mate editing.

## Examples

- ISlotMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISlotMateFeatureData)