---
type: method
interface: IModelDocExtension
member: DeleteRenderMaterial
returns: System.Boolean
parameters:
  -
    name: PwMaterialId
    type: System.Int32
    description: Appearance ID
  -
    name: BReassignIdsAndInvalidate
    type: System.Boolean
    description: True if the appearance IDs are reassigned and this appearance ID is invalidated, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - deleterendermaterial
  - imodeldocextension
  - model
  - doc
  - extension
  - delete
  - render
  - material
  - pw
  - id
  - int32
  - reassign
  - ids
  - invalidate
  - boolean
---

# IModelDocExtension.DeleteRenderMaterial

Not supported in SOLIDWORKS 2011 and later. Superseded by IModelDocExtension::DeleteDisplayStateSpecificRenderMaterial and IModelDocExtension::IDeleteDisplayStateSpecificRenderMaterial.

## Signature

```csharp
System.Boolean DeleteRenderMaterial( 
   System.Int32
PwMaterialId
,
   System.Boolean
BReassignIdsAndInvalidate
)
```
## Parameters

- `PwMaterialId` (System.Int32): Appearance ID
- `BReassignIdsAndInvalidate` (System.Boolean): True if the appearance IDs are reassigned and this appearance ID is invalidated, false if not

## Return Value

True if the appearance is deleted, false if not

## Remarks

By default, appearance IDs are persistent, which means if three appearances (IDs 1, 2, and 3) were applied to the model, and you removed appearance ID 2, then the remaining appearance IDs are 1 and 3. However, if you set BReassignIdsAndInvalidate to true, then appearance ID 2 is invalidated and appearance ID 3 becomes appearance ID 2.
To get the IDs of all of the appearances applied to this model document, call
IModelDocExtension::GetRenderMaterialsCount
.