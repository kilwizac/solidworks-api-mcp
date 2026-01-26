---
type: method
interface: IGtol
member: SetText
returns: System.Boolean
parameters:
  -
    name: WhichText
    type: System.Int32
    description: Text to set as defined in swGTolTextParts_e
  -
    name: Text
    type: System.String
    description: New content for the specified WhichText
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetText
keywords:
  - settext
  - igtol
  - gtol
  - text
  - which
  - int32
  - string
  - boolean
  - datum
  - tags
  - gtols
  - vba
  - vb
  - net
---

# IGtol.SetText

Sets the specified text part of this GTol.

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

- `WhichText` (System.Int32): Text to set as defined in swGTolTextParts_e
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

## See Also

- `IGtol.GetText`