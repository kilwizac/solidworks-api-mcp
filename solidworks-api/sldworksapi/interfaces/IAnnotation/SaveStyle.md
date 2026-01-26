---
type: method
interface: IAnnotation
member: SaveStyle
returns: System.Boolean
parameters:
  -
    name: StyleName
    type: System.String
    description: Name of the style
  -
    name: PathName
    type: System.String
    description: Path and filename to which to save the style
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - file-io
related:
  - IAnnotation.AddOrUpdateStyle
  - IAnnotation.ApplyDefaultStyleAttributes
  - IAnnotation.DeleteStyle
  - IAnnotation.GetStyleName
  - IAnnotation.LoadStyle
  - IAnnotation.SetStyleName
keywords:
  - style
  - annotations
  - annotation
  - see
  - also
  - iannotation
  - styles
  - savestyle
  - save
  - name
  - string
  - path
  - boolean
---

# IAnnotation.SaveStyle

Saves the specified style.

## Signature

```csharp
System.Boolean SaveStyle( 
   System.String
StyleName
,
   System.String
PathName
)
```
## Parameters

- `StyleName` (System.String): Name of the style
- `PathName` (System.String): Path and filename to which to save the style

## Return Value

Unknown.

## Remarks

See SOLIDWORKS Help for the filename extensions to use for styles.

## See Also

- `IAnnotation.AddOrUpdateStyle`
- `IAnnotation.ApplyDefaultStyleAttributes`
- `IAnnotation.DeleteStyle`
- `IAnnotation.GetStyleName`
- `IAnnotation.LoadStyle`
- `IAnnotation.SetStyleName`