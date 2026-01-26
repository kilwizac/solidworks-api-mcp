---
type: method
interface: IDatumTag
member: SetText
returns: System.Boolean
parameters:
  -
    name: WhichText
    type: System.Int32
    description: Text to set as defined in swDatumTagTextParts_e
  -
    name: Text
    type: System.String
    description: New content for the specified WhichText
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - settext
  - idatumtag
  - datum
  - tag
  - text
  - which
  - int32
  - string
  - boolean
  - tags
  - gtols
  - vba
  - vb
  - net
---

# IDatumTag.SetText

Sets the text of this datum tag.

## Signature

```csharp
System.Boolean SetText( 
   System.Int32
WhichText
,
   System.String
Text
)
```
## Parameters

- `WhichText` (System.Int32): Text to set as defined in swDatumTagTextParts_e
- `Text` (System.String): New content for the specified WhichText

## Return Value

True if successful, false if not

## Remarks

After calling this method, call
IModelView::GraphicsRedraw
to see the new text.

## Examples

- Set Text in Datum Tags and GTols (VBA) (Set_Text_in_Datum_Tags_and_GTols_Example_VB.htm)
- Set Text in Datum Tags and GTols (VB.NET) (Set_Text_in_Datum_Tags_and_GTols_Example_VBNET.htm)
- Set Text in Datum Tags and GTols (C#) (Set_Text_in_Datum_Tags_and_GTols_Example_CSharp.htm)