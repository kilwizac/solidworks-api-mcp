---
type: method
interface: IDatumTag
member: SetDisplayStyle
returns: System.Boolean
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True to use the document setting for the datum tag's display style, false to not
  -
    name: Style
    type: System.Int32
    description: Display style as defined in swDatumDisplayType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTag.GetDisplayStyle
  - IDatumTag.GetUseDocDisplayStyle
keywords:
  - setdisplaystyle
  - idatumtag
  - datum
  - tag
  - display
  - style
  - use
  - doc
  - boolean
  - int32
---

# IDatumTag.SetDisplayStyle

Sets the display style of this datum tag.

## Signature

```csharp
System.Boolean SetDisplayStyle( 
   System.Boolean
UseDoc
,
   System.Int32
Style
)
```
## Parameters

- `UseDoc` (System.Boolean): True to use the document setting for the datum tag's display style, false to not
- `Style` (System.Int32): Display style as defined in swDatumDisplayType_e

## Return Value

True if the specified display style is set, false if not

## See Also

- `IDatumTag.GetDisplayStyle`
- `IDatumTag.GetUseDocDisplayStyle`