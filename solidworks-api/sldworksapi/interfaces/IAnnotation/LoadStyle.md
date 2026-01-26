---
type: method
interface: IAnnotation
member: LoadStyle
returns: System.Boolean
parameters:
  -
    name: PathName
    type: System.String
    description: Path and filename of the style to load
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.AddOrUpdateStyle
  - IAnnotation.ApplyDefaultStyleAttributes
  - IAnnotation.DeleteStyle
  - IAnnotation.GetStyleName
  - IAnnotation.SaveStyle
  - IAnnotation.SetStyleName
keywords:
  - annotation
  - see
  - also
  - iannotation
  - styles
  - style
  - annotations
  - loadstyle
  - load
  - path
  - name
  - string
  - boolean
---

# IAnnotation.LoadStyle

Loads the specified style.

## Signature

```csharp
System.Boolean LoadStyle( 
   System.String
PathName
)
```
## Parameters

- `PathName` (System.String): Path and filename of the style to load

## Return Value

Ture if the style is loaded, false if not

## See Also

- `IAnnotation.AddOrUpdateStyle`
- `IAnnotation.ApplyDefaultStyleAttributes`
- `IAnnotation.DeleteStyle`
- `IAnnotation.GetStyleName`
- `IAnnotation.SaveStyle`
- `IAnnotation.SetStyleName`