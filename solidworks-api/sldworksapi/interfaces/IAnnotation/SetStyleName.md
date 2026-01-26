---
type: method
interface: IAnnotation
member: SetStyleName
returns: System.Boolean
parameters:
  -
    name: StyleName
    type: System.String
    description: Name of the style
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
  - IAnnotation.LoadStyle
  - IAnnotation.SaveStyle
keywords:
  - style
  - annotations
  - annotation
  - see
  - also
  - iannotation
  - styles
  - setstylename
  - name
  - string
  - boolean
---

# IAnnotation.SetStyleName

Sets the style for this annotation.

## Signature

```csharp
System.Boolean SetStyleName( 
   System.String
StyleName
)
```
## Parameters

- `StyleName` (System.String): Name of the style

## Return Value

True if the style is set, false if not

## See Also

- `IAnnotation.AddOrUpdateStyle`
- `IAnnotation.ApplyDefaultStyleAttributes`
- `IAnnotation.DeleteStyle`
- `IAnnotation.GetStyleName`
- `IAnnotation.LoadStyle`
- `IAnnotation.SaveStyle`