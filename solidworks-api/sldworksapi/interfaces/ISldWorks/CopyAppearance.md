---
type: method
interface: ISldWorks
member: CopyAppearance
returns: System.Boolean
parameters:
  -
    name: Object
    type: System.Object
    description: Face , body , feature , component , or part whose appearance you want to copy
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.PasteAppearance
keywords:
  - copy
  - appearances
  - paste
  - copyappearance
  - isldworks
  - sld
  - works
  - appearance
  - object
  - boolean
  - vba
  - vb
  - net
---

# ISldWorks.CopyAppearance

Copies the appearance of the specified entity to the clipboard.

## Signature

```csharp
System.Boolean CopyAppearance( 
   System.Object
Object
)
```
## Parameters

- `Object` (System.Object): Face , body , feature , component , or part whose appearance you want to copy

## Return Value

True if appearance is successfully copied to the clipboard, false if not

## Examples

- Copy and Paste Appearances (VBA) (Copy_and_Paste_Appearances_Example_VB.htm)
- Copy and Paste Appearances (VB.NET) (Copy_and_Paste_Appearances_Example_VBNET.htm)
- Copy and Paste Appearances (C#) (Copy_and_Paste_Appearances_Example_CSharp.htm)

## See Also

- `ISldWorks.PasteAppearance`