---
type: method
interface: IModelDocExtension
member: GetLightEnabledInRender
returns: System.Boolean
parameters:
  -
    name: ID
    type: System.Int32
    description: Light ID
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.SetLightEnabledInRender
keywords:
  - lighting
  - photoview
  - 360
  - scenes
  - getlightenabledinrender
  - imodeldocextension
  - model
  - doc
  - extension
  - light
  - enabled
  - render
  - id
  - int32
  - boolean
---

# IModelDocExtension.GetLightEnabledInRender

Gets whether a light is on in this model.

## Signature

```csharp
System.Boolean GetLightEnabledInRender( 
   System.Int32
ID
)
```
## Parameters

- `ID` (System.Int32): Light ID

## Return Value

True of the light is on, false if not

## See Also

- `IModelDocExtension.SetLightEnabledInRender`