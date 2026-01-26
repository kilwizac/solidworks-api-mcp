---
type: property
interface: IScrewMateFeatureData
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
  - iscrewmatefeaturedata
  - screw
  - mate
  - feature
  - data
  - entities
  - object
readonly: null
---

# IScrewMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this screw mate feature.

## Signature

```csharp
System.Object EntitiesToMate {get; set;}
```
## Parameters

None.

## Return Value

Array of two cylindrical faces of the two components to mate (see Remarks )

## Remarks

Instead of specifying this property, you can use
IModelDocExtension::SelectByID2
to pre-select the entities to mate using Mark = 1 for each entity. You can pre-select mate entities during mate creation, but not during mate editing.

## Examples

- IScrewMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IScrewMateFeatureData)