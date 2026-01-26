---
type: method
interface: IDrSection
member: ISetTextFormat
returns: System.Boolean
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True if set to use the appropriate document default setting, false if it is not (see Remarks )
  -
    name: TextFormat
    type: TextFormat
    description: Pointer to the ITextFormat object for this section line text
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.GetTextFormat
  - IDrSection.IGetTextFormat
  - IDrSection.SetTextFormat
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - lines
  - isettextformat
  - dr
  - text
  - format
  - use
  - doc
  - boolean
---

# IDrSection.ISetTextFormat

Sets the text format for the text for this section line.

## Signature

```csharp
System.Boolean ISetTextFormat( 
   System.Boolean
UseDoc
,
   TextFormat
TextFormat
)
```
## Parameters

- `UseDoc` (System.Boolean): True if set to use the appropriate document default setting, false if it is not (see Remarks )
- `TextFormat` (TextFormat): Pointer to the ITextFormat object for this section line text

## Return Value

True if text format is successfully set, false if not

## Remarks

If UseDoc is True, then use the appropriate document default setting. SOLIDWORKS will also ignore TextFormat, which you should set to NULL.

## See Also

- `IDrSection.GetTextFormat`
- `IDrSection.IGetTextFormat`
- `IDrSection.SetTextFormat`