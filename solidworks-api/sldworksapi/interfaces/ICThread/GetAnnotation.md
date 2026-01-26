---
type: method
interface: ICThread
member: GetAnnotation
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetNext3
  - ICThread.IGetAnnotation
  - IModelDocExtension.GetAnnotations
  - IView.GetAnnotations
  - IView.GetFirstAnnotation3
  - IView.IGetAnnotations
keywords:
  - annotation
  - see
  - also
  - iannotation
  - cosmetic
  - threads
  - getannotation
  - icthread
  - ic
  - thread
  - object
  - vba
  - vb
  - net
  - patterned
  - annotations
  - data
---

# ICThread.GetAnnotation

Gets the annotation for this cosmetic thread.

## Signature

```csharp
System.Object GetAnnotation()
```
## Parameters

None.

## Return Value

Annotation

## Remarks

This method gets the owning IAnnotation object for this cosmetic thread. The IAnnotation object is a higher-level object that contains methods and propeties that apply to all types of annotations.

## Examples

- Get Annotation Object (VBA) (Get_Annotation_Object_Example_VB.htm)
- Get Annotation Object (VB.NET) (Get_Annotation_Object_Example_VBNET.htm)
- Get Annotation Object (C#) (Get_Annotation_Object_Example_CSharp.htm)
- Get Patterned Cosmetic Thread Annotations Data (C#) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_CSharp.htm)
- Get Patterned Cosmetic Thread Annotations Data (VB.NET) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_VBNET.htm)
- Get Patterned Cosmetic Thread Annotations Data (VBA) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_VB.htm)

## See Also

- `IAnnotation.GetNext3`
- `ICThread.IGetAnnotation`
- `IModelDocExtension.GetAnnotations`
- `IView.GetAnnotations`
- `IView.GetFirstAnnotation3`
- `IView.IGetAnnotations`