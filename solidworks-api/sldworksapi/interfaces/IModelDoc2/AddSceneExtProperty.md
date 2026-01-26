---
type: property
interface: IModelDoc2
member: AddSceneExtProperty
returns: System.Int32
parameters:
  -
    name: PropertyExtension
    type: System.Object
    description: Value for the scene
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - scene
  - extension
  - addsceneextproperty
  - imodeldoc2
  - model
  - doc2
  - add
  - ext
  - object
  - int32
readonly: null
---

# IModelDoc2.AddSceneExtProperty

Stores a float, string, or integer value for a scene.

## Signature

```csharp
System.Int32 AddSceneExtProperty( 
   System.Object
PropertyExtension
)
```
## Parameters

- `PropertyExtension` (System.Object): Value for the scene

## Return Value

Unique identifier returned to access the property extension in the future

## Remarks

This scene extension property is stored on the model document, but is unique to the model's scene. To add the extension property, you must first define the VARIANT type (float, string, or integer), give your variable a value, and then call this method to place the value on the light source for future reference.