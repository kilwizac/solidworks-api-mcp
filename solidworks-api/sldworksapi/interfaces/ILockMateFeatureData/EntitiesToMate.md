---
type: property
interface: ILockMateFeatureData
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
  - ilockmatefeaturedata
  - lock
  - mate
  - feature
  - data
  - entities
  - object
readonly: null
---

# ILockMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this lock mate.

## Signature

```csharp
System.Object EntitiesToMate {get; set;}
```
## Parameters

None.

## Return Value

Array of entities to mate (see Remarks )

## Remarks

Instead of specifying this property, you can use
IModelDocExtension::SelectByID2
to pre-select the entities to mate using Mark = 1. You can pre-select mate entities during mate creation, but not during mate editing.

## Examples

- ILockMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILockMateFeatureData)