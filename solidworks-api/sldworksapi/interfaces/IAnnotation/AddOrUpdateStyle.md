---
type: method
interface: IAnnotation
member: AddOrUpdateStyle
returns: System.Boolean
parameters:
  -
    name: StyleName
    type: System.String
    description: Name of the style to add or update
  -
    name: BreakLinks
    type: System.Boolean
    description: True to break all links to this style, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.ApplyDefaultStyleAttributes
  - IAnnotation.DeleteStyle
  - IAnnotation.GetStyleName
  - IAnnotation.LoadStyle
  - IAnnotation.SaveStyle
  - IAnnotation.SetStyleName
keywords:
  - style
  - annotations
  - annotation
  - see
  - also
  - iannotation
  - styles
  - addorupdatestyle
  - add
  - update
  - name
  - string
  - break
  - links
  - boolean
---

# IAnnotation.AddOrUpdateStyle

Adds or updates the annotation linked to the specified style.

## Signature

```csharp
System.Boolean AddOrUpdateStyle( 
   System.String
StyleName
,
   System.Boolean
BreakLinks
)
```
## Parameters

- `StyleName` (System.String): Name of the style to add or update
- `BreakLinks` (System.Boolean): True to break all links to this style, false to not

## Return Value

Ture if the operation succeeds, false if it fails

## See Also

- `IAnnotation.ApplyDefaultStyleAttributes`
- `IAnnotation.DeleteStyle`
- `IAnnotation.GetStyleName`
- `IAnnotation.LoadStyle`
- `IAnnotation.SaveStyle`
- `IAnnotation.SetStyleName`