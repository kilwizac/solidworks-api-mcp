---
type: method
interface: IModelDocExtension
member: AddDefaultRenderMaterial
returns: System.Boolean
parameters:
  -
    name: PRenderMaterial
    type: RenderMaterial
    description: Appearance to add to the model
  -
    name: PwMaterialId
    type: System.Int32
    description: Appearance ID
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - adddefaultrendermaterial
  - imodeldocextension
  - model
  - doc
  - extension
  - add
  - default
  - render
  - material
  - pw
  - id
  - int32
  - boolean
---

# IModelDocExtension.AddDefaultRenderMaterial

Not supported in SOLIDWORKS 2011 and later and not superseded.

## Signature

```csharp
System.Boolean AddDefaultRenderMaterial( 
   RenderMaterial
PRenderMaterial
,
   out System.Int32
PwMaterialId
)
```
## Parameters

- `PRenderMaterial` (RenderMaterial): Appearance to add to the model
- `PwMaterialId` (System.Int32): Appearance ID

## Return Value

True if the appearance is added to the model document, false if not