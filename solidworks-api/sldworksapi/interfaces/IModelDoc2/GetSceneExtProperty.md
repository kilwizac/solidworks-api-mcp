---
type: property
interface: IModelDoc2
member: GetSceneExtProperty
returns: System.Object
parameters:
  -
    name: PropertyId
    type: System.Int32
    description: ID of the property extension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ResetSceneExtProperty
keywords:
  - scene
  - properties
  - getsceneextproperty
  - imodeldoc2
  - model
  - doc2
  - ext
  - id
  - int32
  - object
readonly: null
---

# IModelDoc2.GetSceneExtProperty

Gets a float, string, or integer value stored for the scene.

## Signature

```csharp
System.Object GetSceneExtProperty( 
   System.Int32
PropertyId
)
```
## Parameters

- `PropertyId` (System.Int32): ID of the property extension

## Return Value

Value stored for the scene extension property

## Remarks

The type returned is based on the how the data was placed. See
IModelDoc2::AddSceneExtProperty
for deatails.

## See Also

- `IModelDoc2.ResetSceneExtProperty`