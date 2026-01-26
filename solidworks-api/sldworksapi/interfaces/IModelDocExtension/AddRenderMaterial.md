---
type: method
interface: IModelDocExtension
member: AddRenderMaterial
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
  - addrendermaterial
  - imodeldocextension
  - model
  - doc
  - extension
  - add
  - render
  - material
  - pw
  - id
  - int32
  - boolean
---

# IModelDocExtension.AddRenderMaterial

Not supported in SOLIDWORKS 2011 and later. Superseded by IModelDocExtension::AddDisplayStateSpecificRenderMaterial and IModelDocExtension::IAddDisplayStateSpecificRenderMaterial.

## Signature

```csharp
System.Boolean AddRenderMaterial( 
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

True if the appearance is added to the model, false if not