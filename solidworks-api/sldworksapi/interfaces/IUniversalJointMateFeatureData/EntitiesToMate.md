---
type: property
interface: IUniversalJointMateFeatureData
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
  - iuniversaljointmatefeaturedata
  - universal
  - joint
  - mate
  - feature
  - data
  - entities
  - object
readonly: null
---

# IUniversalJointMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this universal joint mate.

## Signature

```csharp
System.Object EntitiesToMate {get; set;}
```
## Parameters

None.

## Return Value

Array of two entities to mate (see Remarks )

## Remarks

Populate the array of this property with the cylindrical
faces
of two shaft components.
Instead of specifying this property, you can use
IModelDocExtension::SelectByID2
to pre-select the entities to mate using Mark = 1. You can pre-select mate entities during mate creation, but not during mate editing.

## Examples

- IUniversalJointMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IUniversalJointMateFeatureData)