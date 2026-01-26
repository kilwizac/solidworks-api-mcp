---
type: method
interface: IModelDocExtension
member: SetLightEnabledInRender
returns: void
parameters:
  -
    name: ID
    type: System.Int32
    description: Light ID
  -
    name: Val
    type: System.Boolean
    description: True to enable the light, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetLightEnabledInRender
keywords:
  - lighting
  - photoview
  - 360
  - scenes
  - setlightenabledinrender
  - imodeldocextension
  - model
  - doc
  - extension
  - light
  - enabled
  - render
  - id
  - int32
  - val
  - boolean
  - void
---

# IModelDocExtension.SetLightEnabledInRender

Sets whether a light is on in this model.

## Signature

```csharp
void SetLightEnabledInRender( 
   System.Int32
ID
,
   System.Boolean
Val
)
```
## Parameters

- `ID` (System.Int32): Light ID
- `Val` (System.Boolean): True to enable the light, false to not

## Return Value

Unknown.

## See Also

- `IModelDocExtension.GetLightEnabledInRender`