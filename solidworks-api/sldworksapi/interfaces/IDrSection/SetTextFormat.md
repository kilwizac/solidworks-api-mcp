---
type: method
interface: IDrSection
member: SetTextFormat
returns: System.Boolean
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True if set to use the appropriate document default setting, false if it is not (see Remarks )
  -
    name: TextFormat
    type: System.Object
    description: Text format for this section line text
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.GetTextFormat
  - IDrSection.IGetTextFormat
  - IDrSection.ISetTextFormat
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - lines
  - settextformat
  - dr
  - text
  - format
  - use
  - doc
  - boolean
  - object
---

# IDrSection.SetTextFormat

Sets the text format for the text for this section line.

## Signature

```csharp
System.Boolean SetTextFormat( 
   System.Boolean
UseDoc
,
   System.Object
TextFormat
)
```
## Parameters

- `UseDoc` (System.Boolean): True if set to use the appropriate document default setting, false if it is not (see Remarks )
- `TextFormat` (System.Object): Text format for this section line text

## Return Value

True if text format is successfully set, false if not

## Remarks

If UseDoc is True, then use the appropriate document default setting. SOLIDWORKS will also ignore TextFormat, which you should set to NULL.

## See Also

- `IDrSection.GetTextFormat`
- `IDrSection.IGetTextFormat`
- `IDrSection.ISetTextFormat`