---
type: property
interface: IGearMateFeatureData
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
  - igearmatefeaturedata
  - gear
  - mate
  - feature
  - data
  - entities
  - object
readonly: null
---

# IGearMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this gear mate.

## Signature

```csharp
System.Object EntitiesToMate {get; set;}
```
## Parameters

None.

## Return Value

Array of two entities to mate (cylindrical or conical faces , axes , or linear edges )

## Remarks

Instead of specifying this property, you can use
IModelDocExtension::SelectByID2
to pre-select the entities to mate using Mark = 1. You can pre-select mate entities during mate creation, but not during mate editing.

## Examples

- IGearMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGearMateFeatureData)