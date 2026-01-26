---
type: method
interface: IAnnotation
member: DeleteStyle
returns: System.Boolean
parameters:
  -
    name: StyleName
    type: System.String
    description: Name of the style to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.AddOrUpdateStyle
  - IAnnotation.ApplyDefaultStyleAttributes
  - IAnnotation.GetStyleName
  - IAnnotation.LoadStyle
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
  - deletestyle
  - delete
  - name
  - string
  - boolean
---

# IAnnotation.DeleteStyle

Deletes the specified style.

## Signature

```csharp
System.Boolean DeleteStyle( 
   System.String
StyleName
)
```
## Parameters

- `StyleName` (System.String): Name of the style to delete

## Return Value

True if the operation succeeds, false if it fails

## Remarks

The current styleis set to
<NONE>
. Dimensions and annotations retain the properties previously applied by the style unless the items are
reset to the document default
.

## See Also

- `IAnnotation.AddOrUpdateStyle`
- `IAnnotation.ApplyDefaultStyleAttributes`
- `IAnnotation.GetStyleName`
- `IAnnotation.LoadStyle`
- `IAnnotation.SaveStyle`
- `IAnnotation.SetStyleName`