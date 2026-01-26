---
type: method
interface: IDimension
member: IGetUserValueIn2
returns: System.Double
parameters:
  -
    name: Doc
    type: ModelDoc2
    description: Document whose units you want to use
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
  - ui
related:
  - IDimension.GetSystemValue3
  - IDimension.GetUserValueIn
  - IDimension.GetValue3
  - IDimension.IGetSystemValue3
  - IDimension.IGetValue3
  - IDimension.ISetSystemValue3
  - IDimension.ISetUserValueIn3
  - IDimension.SetSystemValue3
  - IDimension.SetUserValueIn2
keywords:
  - igetuservaluein2
  - idimension
  - dimension
  - user
  - value
  - in2
  - doc
  - model
  - doc2
  - double
---

# IDimension.IGetUserValueIn2

Gets the value of this dimension in the units of the specified document.

## Signature

```csharp
System.Double IGetUserValueIn2( 
   ModelDoc2
Doc
)
```
## Parameters

- `Doc` (ModelDoc2): Document whose units you want to use

## Return Value

Value of this dimension in the units of the document specified by Doc

## See Also

- `IDimension.GetSystemValue3`
- `IDimension.GetUserValueIn`
- `IDimension.GetValue3`
- `IDimension.IGetSystemValue3`
- `IDimension.IGetValue3`
- `IDimension.ISetSystemValue3`
- `IDimension.ISetUserValueIn3`
- `IDimension.SetSystemValue3`
- `IDimension.SetUserValueIn2`