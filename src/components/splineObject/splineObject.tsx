import Spline from '@splinetool/react-spline';

export default function SplineObject({ className }: { className: string }) {
  const splineScene = "https://prod.spline.design/sVdjzTj7jVQXGCg9/scene.splinecode"
  return (
    <div className={className}>
      <Spline
        scene={splineScene} 
      />
    </div>
  );
}
