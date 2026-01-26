---
type: method
interface: ISldWorks
member: PasteAppearance
returns: System.Boolean
parameters:
  -
    name: Object
    type: System.Object
    description: Face , body , feature , component , or part to which to apply a copied appearance; if Null, the copied appearance is applied to an entity that is pre-selected in the graphics area
  -
    name: AppearanceTarget
    type: System.Int32
    description: Appearance target type as defined in swAppearanceTargetType_e ; only valid if Object is a face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.CopyAppearance
keywords:
  - appearances
  - paste
  - copy
  - pasteappearance
  - isldworks
  - sld
  - works
  - appearance
  - object
  - target
  - int32
  - boolean
  - vba
  - vb
  - net
---

# ISldWorks.PasteAppearance

Applies to the specified entity an appearance that has been copied to the clipboard.

## Signature

```csharp
System.Boolean PasteAppearance( 
   System.Object
Object
,
   System.Int32
AppearanceTarget
)
```
## Parameters

- `Object` (System.Object): Face , body , feature , component , or part to which to apply a copied appearance; if Null, the copied appearance is applied to an entity that is pre-selected in the graphics area
- `AppearanceTarget` (System.Int32): Appearance target type as defined in swAppearanceTargetType_e ; only valid if Object is a face

## Return Value

True if the copied appearance is successfully applied, false if not

## Examples

- Copy and Paste Appearances (VBA) (Copy_and_Paste_Appearances_Example_VB.htm)
- Copy and Paste Appearances (VB.NET) (Copy_and_Paste_Appearances_Example_VBNET.htm)
- Copy and Paste Appearances (C#) (Copy_and_Paste_Appearances_Example_CSharp.htm)

## See Also

- `ISldWorks.CopyAppearance`