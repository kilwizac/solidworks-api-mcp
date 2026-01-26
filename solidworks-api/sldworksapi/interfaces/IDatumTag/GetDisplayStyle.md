---
type: method
interface: IDatumTag
member: GetDisplayStyle
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTag.GetUseDocDisplayStyle
  - IDatumTag.SetDisplayStyle
keywords:
  - getdisplaystyle
  - idatumtag
  - datum
  - tag
  - display
  - style
  - int32
---

# IDatumTag.GetDisplayStyle

Gets the display style of this datum tag.

## Signature

```csharp
System.Int32 GetDisplayStyle()
```
## Parameters

None.

## Return Value

Display style as defined in swDatumDisplayType_e (see Remarks )

## Remarks

This method does not return swDatumDisplayType_Default if the datum tag is set to use the document default setting. Instead, either swDatumDisplayType_Roundgb or swDatumDisplayType_Square is returned.

## See Also

- `IDatumTag.GetUseDocDisplayStyle`
- `IDatumTag.SetDisplayStyle`